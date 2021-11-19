import { ExecutionContext, Injectable, SetMetadata, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

export const PUBLIC_KEY = 'PUBLIC_KEY';
export const Public = () => SetMetadata(PUBLIC_KEY, true);

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

     constructor(private reflector: Reflector) {
          super();
     }

     canActivate(context: ExecutionContext) {
          const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
               context.getHandler(),
               context.getClass(),
          ]);
          if (isPublic) {
               return true;
          }
          return super.canActivate(context);
     }

     handleRequest(err, user, info) {
          if (err || !user) {
               throw err || new UnauthorizedException();
          }
          return user;
     }

}