
    export type RemoteKeys = 'app1/button';
    type PackageType<T> = T extends 'app1/button' ? typeof import('app1/button') :any;