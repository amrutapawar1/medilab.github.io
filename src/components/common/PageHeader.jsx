import React from "react";
import { Images } from "../../assets/images";
import { PageHeaderLinks, RoutePath } from "../../routes/RoutePaths";
import { Link, useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <header className="page_header header-1 ls s-py-10">
      <div className="container px-xl-50">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8 col-12">
            <a href={RoutePath.home} className="logo" style={{ textDecoration: "none" }}>
              <img src={Images.Logo} alt="img" />
            </a>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8 col-sm-4 d-flex align-items-center justify-content-end">
            <nav className="top-nav">
              <ul className="nav sf-menu">
                {PageHeaderLinks.map((item) => {
                  const { isNested = false, nestedPaths = [] } = item;
                  return (
                    <li
                      className={
                        `/${splitLocation[1]}` === item.to ? "active" : ""
                      } id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    >
                      <Link to={item.to} ><a>{item.label}</a></Link>

                      {isNested && item.label === "Partner" ? (
                        <ul className="page-header-dropdown">
                          <li
                            className={
                              splitLocation[1] === "contract-manufacturing"
                                ? "active"
                                : ""
                            }
                            class="nav-link" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                          >
                            <Link to={RoutePath.contractManufacturing}>
                              Contract Manufacturing
                            </Link>
                          </li>
                          <li
                            className={
                              splitLocation[1] === "partner" ? "active" : ""
                            }
                          >
                            <Link to={RoutePath.partnership}>Partnership</Link>
                          </li>
                        </ul>
                      ) : (
                        ''
                      )}
                      {isNested && item.label === "About Us" ? (
                        <ul className="page-header-dropdown">
                          <li
                            className={
                              splitLocation[1] === "about"
                                ? "active"
                                : ""
                            }
                          >
                            <Link to={RoutePath.aboutUs} >
                              About Us
                            </Link>
                          </li>
                          <li
                            className={
                              splitLocation[1] === "csr" ? "active" : ""
                            }
                          >
                            <Link to={RoutePath.corporateSocialResponsibility}>CSR</Link>
                          </li>
                          <li
                            className={
                              splitLocation[1] === "qualityPolicy" ? "active" : ""
                            }
                          >
                            <Link to={RoutePath.qualityPolicy}>Quality Policy</Link>
                          </li>
                          {/* <li
                            className={
                              splitLocation[1] === "career" ? "active" : ""
                            }
                          >
                            <Link to={RoutePath.career}>Career</Link>
                          </li> */}
                        </ul>
                      ) : (
                        ''
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
      </div>
      </div>
      {/* <!-- header toggler --> */}
      <span className="toggle_menu" >
        <span></span>
        <nav className="top-nav">
          <ul className="nav sf-menu">
            {PageHeaderLinks.map((item) => {
              const { isNested = false, nestedPaths = [] } = item;
              return (
                <li
                  className={
                    `/${splitLocation[1]}` === item.to ? "active" : ""
                  } id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  <Link to={item.to} ><a>{item.label}</a></Link>

                  {isNested && item.label === "Partner" ? (
                    <ul className="page-header-dropdown">
                      <li
                        className={
                          splitLocation[1] === "contract-manufacturing"
                            ? "active"
                            : ""
                        }
                        class="nav-link" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                      >
                        <Link to={RoutePath.contractManufacturing}>
                          Contract Manufacturing
                        </Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "partner" ? "active" : ""
                        }
                      >
                        <Link to={RoutePath.partnership}>Partnership</Link>
                      </li>
                    </ul>
                  ) : (
                    ''
                  )}
                  {isNested && item.label === "About Us" ? (
                    <ul className="page-header-dropdown">
                      <li
                        className={
                          splitLocation[1] === "about"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to={RoutePath.aboutUs} >
                          About Us
                        </Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "csr" ? "active" : ""
                        }
                      >
                        <Link to={RoutePath.corporateSocialResponsibility}>CSR</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "qualityPolicy" ? "active" : ""
                        }
                      >
                        <Link to={RoutePath.qualityPolicy}>Quality Policy</Link>
                      </li>
                      {/* <li
                            className={
                              splitLocation[1] === "career" ? "active" : ""
                            }
                          >
                            <Link to={RoutePath.career}>Career</Link>
                          </li> */}
                    </ul>
                  ) : (
                    ''
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </span>
    </header>
  );
};
export default PageHeader;