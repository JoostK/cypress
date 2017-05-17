// missing type definitions for 3rd party libraries
// https://glebbahmutov.com/blog/trying-typescript/#manual-types-for-3rd-party-libraries
declare module 'execa' {
  type ExecaResult = {
    stdout: string
  }
  interface Execa {
    shell: (cmd:string) => Promise<ExecaResult>
  }
  const execa: Execa
  export = execa
}

declare module 'plist' {
  interface Plist {
    parse: (s:string) => any
  }
  const plist: Plist
  export = plist
}
