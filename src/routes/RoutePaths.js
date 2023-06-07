import Home from '../pages/home/Home';
import AboutUs from '../pages/about/AboutUs';
import ContactUs from '../pages/Contact/ContactUs';
import GlobalPresence from '../pages/globalPresence/GlobalPresence';
import CorporateSocialResponsibility from '../pages/CorporateSocialResponsibility';
import ContractManufacturing from '../pages/partnership/ContractManufacturing';
import Partnership from '../pages/partnership/Partnership';
import Carts from '../context/cart/Carts';
import ProductDetails from '../pages/product/productDetails/ProductDetails';
import Product from '../pages/product/product/Product';
import Career from '../pages/Career';
import QualityPolicy from '../pages/QualityPolicy';

export const RoutePath = {
  home: "/",
  aboutUs: "/about",
  contact: "/contact",
  globalPresence: "/global-presence",
  corporateSocialResponsibility: "/csr",
  product: "/product",
  partnership: "/partner",
  contractManufacturing: "/contact-manufacturing",
  cart: "/cart",
  career: "/career",
  qualityPolicy:"/quality-policy"
}

export const PageHeaderLinks = [
  {
    label: "Home",
    to: RoutePath.home,
  },
  {
    label: "About Us",
    to: RoutePath.aboutUs,
    isNested: true,
    nestedPaths: [
      {
        label: "Company",
        to: RoutePath.aboutUs
      },
      {
        label: "CSR",
        to: RoutePath.corporateSocialResponsibility
      },
      {
        label: "QualityPolicy",
        to: RoutePath.qualityPolicy
      },
      // {
      //   label: "Career",
      //   to: RoutePath.career
      // }
    ]
  },
  {
    label: "Products",
    to: RoutePath.product
  },
  {
    label: "Global Presence",
    to: RoutePath.globalPresence
  },
  // {
  //   label: "CSR",
  //   to: RoutePath.corporateSocialResponsibility
  // },
  {
    label: "Partner",
    to: RoutePath.partnership,
    isNested: true,
    nestedPaths: [
      {
        label: "Contact Manufacturing",
        to: RoutePath.contractManufacturing
      },
      {
        label: "Partnership",
        to: RoutePath.partnership
      },
    ]
  },
  {
    label: "Contact Us",
    to: RoutePath.contact
  }
]

export const RoutePaths = [
  {
    component: Home,
    path: RoutePath.home,
    exact: true,
  },
  {
    component: AboutUs,
    path: RoutePath.aboutUs,
    exact: true
  },
  {
    component: ContactUs,
    path: RoutePath.contact,
    exact: true
  },
  {
    component: GlobalPresence,
    path: RoutePath.globalPresence,
    exact: true
  },
  {
    component: CorporateSocialResponsibility,
    path: RoutePath.corporateSocialResponsibility,
    exact: true
  },
  {
    component: Product,
    path: RoutePath.product,
    exact: true
  },
  {
    component: ProductDetails,
    path: '/product/:id',
    exact: true
  },
  {
    component: ContractManufacturing,
    path: RoutePath.contractManufacturing,
    exact: true
  },
  {
    component: Partnership,
    path: RoutePath.partnership,
    exact: true
  },
  {
    component: Carts,
    path: RoutePath.cart,
    exact: true
  },
  {
    component: QualityPolicy,
    path: RoutePath.qualityPolicy,
    exact: true
  },
  {
    component: Career,
    path: RoutePath.career,
    exact: true
  }
];