{
  "targets": [{
    "target_name": "fuse",
    "include_dirs": [
      "<!(node -e \"require('napi-macros')\")",
      "<!(node -e \"require('fuse-shared-library/include')\")",
    ],
    "libraries": [
      "<!(node -e \"require('fuse-shared-library/lib')\")",
    ],
    "sources": [
      "fuse-native.cpp"
    ],
    'xcode_settings': {
      'OTHER_CFLAGS': [
        '-g',
        '-O3',
        '-Wall'
      ]
    },
    'cflags': [
      '-g',
      '-O3',
      '-Wall'
    ],
    "conditions": [
      ['OS!="win"', {}],
      ['OS=="win"', {
        "include_dirs": [
          "$(VCPKG_ROOT)/packages/pthreads_x64-windows/include"
        ],
        "libraries": [
          "$(VCPKG_ROOT)/packages/pthreads_x64-windows/lib/pthreadVC3.lib"
        ],
      }]
    ],
  }, {
    "target_name": "postinstall",
    "type": "none",
    "dependencies": ["fuse"],
    "copies": [{
      "destination": "build/Release",
      "files": ["node -e require('fuse-shared-library/lib')"],
    }],
    "conditions": [
      ['OS=="win"', {
        "copies": [
          {"destination":"build/Release", "files": [
            "<!(echo %ProgramFiles(x86)%)/WinFsp/bin/winfsp-x64.dll",
            "$(VCPKG_ROOT)/packages/pthreads_x64-windows/bin/pthreadVC3.dll",
          ]}
        ],
      }]
    ],
  }]
}
