declare const JwtStrategy_base: new (...args: {}) => InstanceType<T>;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): unknown;
}
export {};
