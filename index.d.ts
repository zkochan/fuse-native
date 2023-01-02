type OPERATIONS = {
    'init': (...args2: any[]) => void;
    'error': (...args2: any[]) => void;
    'access': (...args2: any[]) => void;
    'statfs': (...args2: any[]) => void;
    'fgetattr': (...args2: any[]) => void;
    'getattr': (...args2: any[]) => void;
    'flush': (...args2: any[]) => void;
    'fsync': (...args2: any[]) => void;
    'fsyncdir': (...args2: any[]) => void;
    'readdir': (...args2: any[]) => void;
    'truncate': (...args2: any[]) => void;
    'ftruncate': (...args2: any[]) => void;
    'utimens': (...args2: any[]) => void;
    'readlink': (...args2: any[]) => void;
    'chown': (...args2: any[]) => void;
    'chmod': (...args2: any[]) => void;
    'mknod': (...args2: any[]) => void;
    'setxattr': (...args2: any[]) => void;
    'getxattr': (...args2: any[]) => void;
    'listxattr': (...args2: any[]) => void;
    'removexattr': (...args2: any[]) => void;
    'open': (...args2: any[]) => void;
    'opendir': (...args2: any[]) => void;
    'read': (...args2: any[]) => void;
    'write': (...args2: any[]) => void;
    'release': (...args2: any[]) => void;
    'releasedir': (...args2: any[]) => void;
    'create': (...args2: any[]) => void;
    'unlink': (...args2: any[]) => void;
    'rename': (...args2: any[]) => void;
    'link': (...args2: any[]) => void;
    'symlink': (...args2: any[]) => void;
    'mkdir': (...args2: any[]) => void;
    'rmdir': (...args2: any[]) => void
};

// See https://github.com/refinio/fuse-native
// See https://man7.org/linux/man-pages/man8/mount.fuse3.8.html
type OPTIONS = {
  uid?: number;
  gid?: number;
  timeout?: number
  displayFolder?: string;
  debug?: boolean;
  force?: boolean;
  mkdir?: boolean;
  allowOther?: boolean;
  allowRoot?: boolean;
  autoUnmount?: boolean;
  defaultPermissions?: string;
  blkdev?: string;
  blksize?: number;
  maxRead?: number;
  fd?: number;
  userId?: number;
  fsname?: string;
  subtype?: string;
  kernelCache?: boolean;
  autoCache?: boolean;
  umask?: number;
  entryTimeout?: number;
  attrTimeout?: number;
  acAttrTimeout?: number;
  noforget?: boolean;
  remember?: number;
  modules?: string;
  name?: string;
  mnt?: string;
};

declare var fuse: {
  // Constructor
  (mnt: string, ops: OPERATIONS, opts: OPTIONS): fuse.Fuse;
  new(mnt: string, ops: OPERATIONS, opts: OPTIONS): fuse.Fuse;
  // STATIC: Added by fuse-native
  unmount: (mnt: string, cb: (err: null | Error) => void) => any;
  // STATIC: Added by fuse-native-PLATFORM
  beforeMount: (cb: (err: null | Error) => void) => any;
  beforeUnmount: (cb: (err: null | Error) => void) => any;
  configure: (cb: (err: null | Error) => void) => any;
  unconfigure: (cb: (err: null | Error) => void) => any;
  isConfigured: (cb: (err: null, result: boolean) => any) => any;

  // Error codes - numeric value retrieved from Fuse instance with errno(code)
  EPERM: -1;
  ENOENT: -2;
  ESRCH: -3;
  EINTR: -4;
  EIO: -5;
  ENXIO: -6;
  E2BIG: -7;
  ENOEXEC: -8;
  EBADF: -9;
  ECHILD: -10;
  EAGAIN: -11;
  ENOMEM: -12;
  EACCES: -13;
  EFAULT: -14;
  ENOTBLK: -15;
  EBUSY: -16;
  EEXIST: -17;
  EXDEV: -18;
  ENODEV: -19;
  ENOTDIR: -20;
  EISDIR: -21;
  EINVAL: -22;
  ENFILE: -23;
  EMFILE: -24;
  ENOTTY: -25;
  ETXTBSY: -26;
  EFBIG: -27;
  ENOSPC: -28;
  ESPIPE: -29;
  EROFS: -30;
  EMLINK: -31;
  EPIPE: -32;
  EDOM: -33;
  ERANGE: -34;
  EDEADLK: -35;
  ENAMETOOLONG: -36;
  ENOLCK: -37;
  ENOSYS: -38;
  ENOTEMPTY: -39;
  ELOOP: -40;
  EWOULDBLOCK: -11;
  ENOMSG: -42;
  EIDRM: -43;
  ECHRNG: -44;
  EL2NSYNC: -45;
  EL3HLT: -46;
  EL3RST: -47;
  ELNRNG: -48;
  EUNATCH: -49;
  ENOCSI: -50;
  EL2HLT: -51;
  EBADE: -52;
  EBADR: -53;
  EXFULL: -54;
  ENOANO: -55;
  EBADRQC: -56;
  EBADSLT: -57;
  EDEADLOCK: -35;
  EBFONT: -59;
  ENOSTR: -60;
  ENODATA: -61;
  ETIME: -62;
  ENOSR: -63;
  ENONET: -64;
  ENOPKG: -65;
  EREMOTE: -66;
  ENOLINK: -67;
  EADV: -68;
  ESRMNT: -69;
  ECOMM: -70;
  EPROTO: -71;
  EMULTIHOP: -72;
  EDOTDOT: -73;
  EBADMSG: -74;
  EOVERFLOW: -75;
  ENOTUNIQ: -76;
  EBADFD: -77;
  EREMCHG: -78;
  ELIBACC: -79;
  ELIBBAD: -80;
  ELIBSCN: -81;
  ELIBMAX: -82;
  ELIBEXEC: -83;
  EILSEQ: -84;
  ERESTART: -85;
  ESTRPIPE: -86;
  EUSERS: -87;
  ENOTSOCK: -88;
  EDESTADDRREQ: -89;
  EMSGSIZE: -90;
  EPROTOTYPE: -91;
  ENOPROTOOPT: -92;
  EPROTONOSUPPORT: -93;
  ESOCKTNOSUPPORT: -94;
  EOPNOTSUPP: -95;
  EPFNOSUPPORT: -96;
  EAFNOSUPPORT: -97;
  EADDRINUSE: -98;
  EADDRNOTAVAIL: -99;
  ENETDOWN: -100;
  ENETUNREACH: -101;
  ENETRESET: -102;
  ECONNABORTED: -103;
  ECONNRESET: -104;
  ENOBUFS: -105;
  EISCONN: -106;
  ENOTCONN: -107;
  ESHUTDOWN: -108;
  ETOOMANYREFS: -109;
  ETIMEDOUT: -110;
  ECONNREFUSED: -111;
  EHOSTDOWN: -112;
  EHOSTUNREACH: -113;
  EALREADY: -114;
  EINPROGRESS: -115;
  ESTALE: -116;
  EUCLEAN: -117;
  ENOTNAM: -118;
  ENAVAIL: -119;
  EISNAM: -120;
  EREMOTEIO: -121;
  EDQUOT: -122;
  ENOMEDIUM: -123;
  EMEDIUMTYPE: -124;
}

declare namespace fuse {
  interface Fuse {
    opts: OPTIONS;
    mnt: string;
    ops: OPERATIONS;
    timeout: number;

    mount: (cb: (err: null | Error) => any) => void;
    unmount: (cb: (err: null | Error) => any) => void;
    errno: (code?: string) => number;

    // From "nanoresource"
    // See https://github.com/mafintosh/nanoresource/blob/master/index.js
    opening: boolean;
    opened: boolean;
    closing: boolean;
    closed: boolean;
    actives: number;
    open(cb: (err?: Error) => any): void;
    active(cb?: (err?: Error) => any): boolean;
    inactive(): void;
    inactive(cb: (err: Error, val: any) => any, err: null, val: any): void;
    inactive(cb: (err: Error, val: any) => any, err: Error,): void;
    close(cb?: (err?: Error) => any): void;
    close(allowActive: boolean, cb: (err?: Error) => any): void;
  }
}

export = fuse;
