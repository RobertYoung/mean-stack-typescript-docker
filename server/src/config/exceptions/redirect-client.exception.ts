import { HttpException, HttpStatus, Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { API_PREFIX } from '@server/app.constants';

@Catch(HttpException)
export class RedirectClientException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    // Redirect all requests to the client unless the path starts with /api
    if ((<string>request.path).startsWith(API_PREFIX)) {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url
      });
    } else {
      response.render('index.html', { request });
    }
  }
}
