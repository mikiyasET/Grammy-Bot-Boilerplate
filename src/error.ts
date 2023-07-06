import  {NextFunction,Request,Response} from "express";


export function errorMiddleWare(error: errorRes, req: Request, res: Response, next: NextFunction): any {
    if(!(error instanceof CAError)){
        return res.status(400).send(error);
    }
    return res.status(error.statusCode ?? 400).send(error);
}


export interface errorRes {
    msg: any
    type: string
    statusCode: number
}

export type CAErrorType = 'success' | 'error' | 'warning' | 'info' | 'question';
export class CAError implements errorRes {
    constructor({message, type, status, code}: { message: any, type: CAErrorType, status:number, code?:string}) {
        this.statusCode = status
        this.type = type;
        this.name = "CAError";
        this.msg = message;
        this.code = code ?? 'unknown';
    }

    msg: any;

    type: string
    statusCode: number
    code: string
    name: string;
}