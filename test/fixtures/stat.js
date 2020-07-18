const os = require('os')

const directory = 0o40_000
const regularFile = 0o100_000
const link = 0o120_000

const IS_WIN32 = os.platform() === 'win32'
const directoryMode = !IS_WIN32 ? (directory | 0o755) : (directory | 0o777)
const fileMode = !IS_WIN32 ? (regularFile | 0o644) : (regularFile | 0o777)
const linkMode = !IS_WIN32 ? (link | 0o755) : (link | 0o777)

module.exports = function (st) {
  return {
    mtime: st.mtime || new Date(),
    atime: st.atime || new Date(),
    ctime: st.ctime || new Date(),
    size: st.size !== undefined ? st.size : 0,
    mode: st.mode === 'dir' ? directoryMode : (st.mode === 'file' ? fileMode : (st.mode === 'link' ? linkMode : st.mode)),
    uid: st.uid !== undefined ? st.uid : (process.getuid != null ? process.getuid() : 0),
    gid: st.gid !== undefined ? st.gid : (process.getgid != null ? process.getgid() : 0)
  }
}
