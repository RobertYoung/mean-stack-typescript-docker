import * as moduleAlias from 'module-alias';
import { FOLDER_SERVER, FOLDER_SHARED } from './../../app.constants';

moduleAlias.addAliases({
  '@server': FOLDER_SERVER,
  '@shared': FOLDER_SHARED
});
