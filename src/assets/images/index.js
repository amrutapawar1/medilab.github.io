import { Home } from './home';
import Logo from './logo.jpg';
import { Product } from './products';
import { Clients } from './clients';
import { Icons} from './icons';
import { About } from './about';
import { CSR } from './csr';
import { globalPresence } from './globalPresence';


export const Images = {

  Logo: Logo,
  ...Clients,
  ...Icons,
  ...Home,
  ...Product,
  ...About,
  ...CSR,
  ...globalPresence
}