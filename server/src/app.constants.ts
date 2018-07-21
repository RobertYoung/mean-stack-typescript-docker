import { join } from 'path';

export const DIST_CLIENT: string = join(process.cwd(), '../client/dist');
export const FOLDER_SERVER: string = __dirname;
export const FOLDER_SHARED: string = join(__dirname, '/../../shared');
