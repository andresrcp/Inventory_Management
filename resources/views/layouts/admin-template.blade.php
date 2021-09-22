<!DOCTYPE html>

<html lang="en">
<head>
    <base href="./../">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="CoreUI - Open Source Bootstrap Admin Template">
    <meta name="author" content="Łukasz Holeczek">
    <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,jQuery,CSS,HTML,RWD,Dashboard">
    <title>CoreUI Free Bootstrap Admin Template</title>
    <link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link href="{{asset('css/coreui.css')}}" rel="stylesheet">

    <meta name="robots" content="noindex">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118965717-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-118965717-1');
    </script>
</head>
<body class="c-app">
<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
        <svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
        </svg>
        <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#signet"></use>
        </svg>
    </div>
    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="index.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
                </svg>
                Dashboard<span class="badge badge-info">NEW</span></a></li>
        <li class="c-sidebar-nav-title">Theme</li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="colors.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-drop"></use>
                </svg>
                Colors</a></li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="typography.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-pencil"></use>
                </svg>
                Typography</a></li>
        <li class="c-sidebar-nav-title">Components</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-puzzle"></use>
                </svg>
                Base</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/breadcrumb.html"><span
                            class="c-sidebar-nav-icon"></span> Breadcrumb</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/cards.html"><span
                            class="c-sidebar-nav-icon"></span> Cards</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/carousel.html"><span
                            class="c-sidebar-nav-icon"></span> Carousel</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/collapse.html"><span
                            class="c-sidebar-nav-icon"></span> Collapse</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/forms.html"><span
                            class="c-sidebar-nav-icon"></span> Forms</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/jumbotron.html"><span
                            class="c-sidebar-nav-icon"></span> Jumbotron</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/list-group.html"><span
                            class="c-sidebar-nav-icon"></span> List group</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/navs.html"><span
                            class="c-sidebar-nav-icon"></span> Navs</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/pagination.html"><span
                            class="c-sidebar-nav-icon"></span> Pagination</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/popovers.html"><span
                            class="c-sidebar-nav-icon"></span> Popovers</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/progress.html"><span
                            class="c-sidebar-nav-icon"></span> Progress</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/scrollspy.html"><span
                            class="c-sidebar-nav-icon"></span> Scrollspy</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/switches.html"><span
                            class="c-sidebar-nav-icon"></span> Switches</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/tables.html"><span
                            class="c-sidebar-nav-icon"></span> Tables</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/tabs.html"><span
                            class="c-sidebar-nav-icon"></span> Tabs</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/tooltips.html"><span
                            class="c-sidebar-nav-icon"></span> Tooltips</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-cursor"></use>
                </svg>
                Buttons</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/buttons.html"><span
                            class="c-sidebar-nav-icon"></span> Buttons</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/button-group.html"><span
                            class="c-sidebar-nav-icon"></span> Buttons Group</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/dropdowns.html"><span
                            class="c-sidebar-nav-icon"></span> Dropdowns</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/brand-buttons.html"><span
                            class="c-sidebar-nav-icon"></span> Brand Buttons</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="charts.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
                </svg>
                Charts</a></li>
        <li class="c-sidebar-nav-dropdown"><a class="c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-star"></use>
                </svg>
                Icons</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="icons/coreui-icons-free.html"> CoreUI
                        Icons<span class="badge badge-success">Free</span></a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="icons/coreui-icons-brand.html">
                        CoreUI Icons - Brand</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="icons/coreui-icons-flag.html"> CoreUI
                        Icons - Flag</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                </svg>
                Notifications</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="notifications/alerts.html"><span
                            class="c-sidebar-nav-icon"></span> Alerts</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="notifications/badge.html"><span
                            class="c-sidebar-nav-icon"></span> Badge</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="notifications/modals.html"><span
                            class="c-sidebar-nav-icon"></span> Modals</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="widgets.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-calculator"></use>
                </svg>
                Widgets<span class="badge badge-info">NEW</span></a></li>
        <li class="c-sidebar-nav-divider"></li>
        <li class="c-sidebar-nav-title">Extras</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-star"></use>
                </svg>
                Pages</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="login.html" target="_top">
                        <svg class="c-sidebar-nav-icon">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                        </svg>
                        Login</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="register.html" target="_top">
                        <svg class="c-sidebar-nav-icon">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                        </svg>
                        Register</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="404.html" target="_top">
                        <svg class="c-sidebar-nav-icon">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bug"></use>
                        </svg>
                        Error 404</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="500.html" target="_top">
                        <svg class="c-sidebar-nav-icon">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bug"></use>
                        </svg>
                        Error 500</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item mt-auto"><a class="c-sidebar-nav-link c-sidebar-nav-link-success"
                                                  href="https://coreui.io" target="_top">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-cloud-download"></use>
                </svg>
                Download CoreUI</a></li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link c-sidebar-nav-link-danger"
                                          href="https://coreui.io/pro/" target="_top">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-layers"></use>
                </svg>
                Try CoreUI<strong>PRO</strong></a></li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent"
            data-class="c-sidebar-minimized"></button>
</div>
<div class="c-wrapper c-fixed-components">
    <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
        <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar"
                data-class="c-sidebar-show">
            <svg class="c-icon c-icon-lg">
                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
            </svg>
        </button>
        <a class="c-header-brand d-lg-none" href="#">
            <svg width="118" height="46" alt="CoreUI Logo">
                <use xlink:href="assets/brand/coreui.svg#full"></use>
            </svg>
        </a>
        <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar"
                data-class="c-sidebar-lg-show" responsive="true">
            <svg class="c-icon c-icon-lg">
                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
            </svg>
        </button>
        <ul class="c-header-nav d-md-down-none">
            <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Dashboard</a></li>
            <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Users</a></li>
            <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Settings</a></li>
        </ul>
        <ul class="c-header-nav ml-auto mr-4">
            <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
                    <svg class="c-icon">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                    </svg>
                </a></li>
            <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
                    <svg class="c-icon">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
                    </svg>
                </a></li>
            <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
                    <svg class="c-icon">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                    </svg>
                </a></li>
            <li class="c-header-nav-item dropdown"><a class="c-header-nav-link" data-toggle="dropdown" href="#"
                                                      role="button" aria-haspopup="true" aria-expanded="false">
                    <div class="c-avatar"><img class="c-avatar-img" src="assets/img/avatars/6.jpg" alt="user">
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right pt-0">
                    <div class="dropdown-header bg-light py-2"><strong>Account</strong></div>
                    <a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                        </svg>
                        Updates<span class="badge badge-info ml-auto">42</span></a><a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                        </svg>
                        Messages<span class="badge badge-success ml-auto">42</span></a><a class="dropdown-item"
                                                                                          href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-task"></use>
                        </svg>
                        Tasks<span class="badge badge-danger ml-auto">42</span></a><a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"></use>
                        </svg>
                        Comments<span class="badge badge-warning ml-auto">42</span></a>
                    <div class="dropdown-header bg-light py-2"><strong>Settings</strong></div>
                    <a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                        </svg>
                        Profile</a><a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
                        </svg>
                        Settings</a><a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"></use>
                        </svg>
                        Payments<span class="badge badge-secondary ml-auto">42</span></a><a class="dropdown-item"
                                                                                            href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-file"></use>
                        </svg>
                        Projects<span class="badge badge-primary ml-auto">42</span></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
                        </svg>
                        Lock Account</a><a class="dropdown-item" href="#">
                        <svg class="c-icon mr-2">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                        </svg>
                        Logout</a>
                </div>
            </li>
        </ul>
        <div class="c-subheader px-3">

            <ol class="breadcrumb border-0 m-0">
                <li class="breadcrumb-item">Home</li>
                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                <li class="breadcrumb-item active">Dashboard</li>

            </ol>
        </div>
    </header>
    <div class="c-body">
        <main class="c-main">
            <div class="container-fluid">
                <div class="fade-in">
                    <div class="card">
                        <div class="card-header"><strong>Standard Buttons</strong></div>
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-primary" type="button">Primary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-secondary" type="button">Secondary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-success" type="button">Success</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-warning" type="button">Warning</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-danger" type="button">Danger</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-info" type="button">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-light" type="button">Light</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-dark" type="button">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-link" type="button">Link</button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Active State</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-primary active" type="button" aria-pressed="true">
                                        Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-secondary active" type="button"
                                            aria-pressed="true">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-success active" type="button" aria-pressed="true">
                                        Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-warning active" type="button" aria-pressed="true">
                                        Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-danger active" type="button" aria-pressed="true">
                                        Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-info active" type="button" aria-pressed="true">
                                        Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-light active" type="button" aria-pressed="true">
                                        Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-dark active" type="button" aria-pressed="true">
                                        Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-link active" type="button" aria-pressed="true">
                                        Link
                                    </button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-primary" type="button" disabled="">Primary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-secondary" type="button" disabled="">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-success" type="button" disabled="">Success</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-warning" type="button" disabled="">Warning</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-danger" type="button" disabled="">Danger</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-info" type="button" disabled="">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-light" type="button" disabled="">Light</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-dark" type="button" disabled="">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-link" type="button" disabled="">Link</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"><strong>Outline Buttons</strong></div>
                        <div class="card-body">
                            <p>Use<code>.btn-outline-*</code> class for outline buttons.</p>
                            <div class="row align-items-center">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-primary" type="button">Primary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-secondary" type="button">Secondary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-success" type="button">Success</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-warning" type="button">Warning</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-danger" type="button">Danger</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-info" type="button">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-light" type="button">Light</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-dark" type="button">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"></div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Active State</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-primary active" type="button"
                                            aria-pressed="true">Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-secondary active" type="button"
                                            aria-pressed="true">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-success active" type="button"
                                            aria-pressed="true">Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-warning active" type="button"
                                            aria-pressed="true">Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-danger active" type="button"
                                            aria-pressed="true">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-info active" type="button"
                                            aria-pressed="true">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-light active" type="button"
                                            aria-pressed="true">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-dark active" type="button"
                                            aria-pressed="true">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"></div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-primary" type="button" disabled="">
                                        Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-secondary" type="button" disabled="">
                                        Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-success" type="button" disabled="">
                                        Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-warning" type="button" disabled="">
                                        Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-danger" type="button" disabled="">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-info" type="button" disabled="">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-light" type="button" disabled="">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-outline-dark" type="button" disabled="">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"><strong>Ghost Buttons</strong></div>
                        <div class="card-body">
                            <p>Use<code>.btn-ghost-*</code> class for ghost buttons.</p>
                            <div class="row align-items-center">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-primary" type="button">Primary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-secondary" type="button">Secondary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-success" type="button">Success</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-warning" type="button">Warning</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-danger" type="button">Danger</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-info" type="button">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-light" type="button">Light</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-dark" type="button">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"></div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Active State</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-primary active" type="button"
                                            aria-pressed="true">Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-secondary active" type="button"
                                            aria-pressed="true">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-success active" type="button"
                                            aria-pressed="true">Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-warning active" type="button"
                                            aria-pressed="true">Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-danger active" type="button"
                                            aria-pressed="true">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-info active" type="button"
                                            aria-pressed="true">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-light active" type="button"
                                            aria-pressed="true">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-dark active" type="button"
                                            aria-pressed="true">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"></div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-primary" type="button" disabled="">Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-secondary" type="button" disabled="">
                                        Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-success" type="button" disabled="">Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-warning" type="button" disabled="">Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-danger" type="button" disabled="">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-info" type="button" disabled="">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-light" type="button" disabled="">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-block btn-ghost-dark" type="button" disabled="">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"><strong>Square Buttons</strong></div>
                        <div class="card-body">
                            <p>Use<code>.btn-square</code> class for square buttons.</p>
                            <div class="row align-items-center">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-primary" type="button">Primary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-secondary" type="button">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-success" type="button">Success</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-warning" type="button">Warning</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-danger" type="button">Danger</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-info" type="button">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-light" type="button">Light</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-dark" type="button">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-link" type="button">Link</button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Active State</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-primary active" type="button"
                                            aria-pressed="true">Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-secondary active" type="button"
                                            aria-pressed="true">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-success active" type="button"
                                            aria-pressed="true">Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-warning active" type="button"
                                            aria-pressed="true">Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-danger active" type="button"
                                            aria-pressed="true">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-info active" type="button"
                                            aria-pressed="true">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-light active" type="button"
                                            aria-pressed="true">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-dark active" type="button"
                                            aria-pressed="true">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-link active" type="button"
                                            aria-pressed="true">Link
                                    </button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-primary" type="button" disabled="">
                                        Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-secondary" type="button" disabled="">
                                        Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-success" type="button" disabled="">
                                        Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-warning" type="button" disabled="">
                                        Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-danger" type="button" disabled="">
                                        Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-info" type="button" disabled="">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-light" type="button" disabled="">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-dark" type="button" disabled="">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-square btn-block btn-link" type="button" disabled="">Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"><strong>Pill Buttons</strong></div>
                        <div class="card-body">
                            <p>Use<code>.btn-pill</code> class for pill buttons.</p>
                            <div class="row align-items-center">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-primary" type="button">Primary</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-secondary" type="button">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-success" type="button">Success</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-warning" type="button">Warning</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-danger" type="button">Danger</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-info" type="button">Info</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-light" type="button">Light</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-dark" type="button">Dark</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-link" type="button">Link</button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Active State</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-primary active" type="button"
                                            aria-pressed="true">Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-secondary active" type="button"
                                            aria-pressed="true">Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-success active" type="button"
                                            aria-pressed="true">Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-warning active" type="button"
                                            aria-pressed="true">Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-danger active" type="button"
                                            aria-pressed="true">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-info active" type="button"
                                            aria-pressed="true">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-light active" type="button"
                                            aria-pressed="true">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-dark active" type="button"
                                            aria-pressed="true">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-link active" type="button"
                                            aria-pressed="true">Link
                                    </button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-primary" type="button" disabled="">
                                        Primary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-secondary" type="button" disabled="">
                                        Secondary
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-success" type="button" disabled="">
                                        Success
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-warning" type="button" disabled="">
                                        Warning
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-danger" type="button" disabled="">Danger
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-info" type="button" disabled="">Info
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-light" type="button" disabled="">Light
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-dark" type="button" disabled="">Dark
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                    <button class="btn btn-pill btn-block btn-link" type="button" disabled="">Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"><strong>Sizes</strong></div>
                        <div class="card-body">
                            <p>Fancy larger or smaller buttons? Add<code>.btn-lg</code> or<code>.btn-sm</code> for
                                additional sizes.</p>
                            <div class="row align-items-center">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Small add<code>.btn-sm</code></div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-sm btn-primary" type="button">Standard Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-sm btn-outline-secondary" type="button">Outline Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-sm btn-ghost-success" type="button">Ghost Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-sm btn-square btn-warning" type="button">Square Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-sm btn-pill btn-danger" type="button">Pill Button</button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-primary" type="button">Standard Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-outline-secondary" type="button">Outline Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-ghost-success" type="button">Ghost Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-square btn-warning" type="button">Square Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-pill btn-danger" type="button">Pill Button</button>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="col-12 col-xl mb-3 mb-xl-0">Large add<code>.btn-lg</code>.</div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-lg btn-primary" type="button">Standard Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-lg btn-outline-secondary" type="button">Outline Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-lg btn-ghost-success" type="button">Ghost Button</button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-lg btn-square btn-warning" type="button">Square Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-lg btn-pill btn-danger" type="button">Pill Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"><strong>With Icons</strong></div>
                        <div class="card-body">
                            <div class="row align-items-center mt-3">
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-primary" type="button">
                                        <svg class="c-icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lightbulb"></use>
                                        </svg>&nbsp;Standard Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-outline-secondary" type="button">
                                        <svg class="c-icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lightbulb"></use>
                                        </svg>&nbsp;Outline Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-ghost-success" type="button">
                                        <svg class="c-icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lightbulb"></use>
                                        </svg>&nbsp;Ghost Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-square btn-warning" type="button">
                                        <svg class="c-icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lightbulb"></use>
                                        </svg>&nbsp;Square Button
                                    </button>
                                </div>
                                <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                                    <button class="btn btn-pill btn-danger" type="button">
                                        <svg class="c-icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lightbulb"></use>
                                        </svg>&nbsp;Pill Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header"><strong>Block Level Buttons</strong></div>
                                <div class="card-body">
                                    <p>Add this class<code>.btn-block</code></p>
                                    <button class="btn btn-secondary btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                    <button class="btn btn-primary btn-lg btn-block" type="button">Block level button
                                    </button>
                                    <button class="btn btn-success btn-lg btn-block" type="button">Block level button
                                    </button>
                                    <button class="btn btn-info btn-lg btn-block" type="button">Block level button
                                    </button>
                                    <button class="btn btn-warning btn-lg btn-block" type="button">Block level button
                                    </button>
                                    <button class="btn btn-danger btn-lg btn-block" type="button">Block level button
                                    </button>
                                    <button class="btn btn-link btn-lg btn-block" type="button">Block level button
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header"><strong>Block Level Buttons</strong></div>
                                <div class="card-body">
                                    <p>Add this class<code>.btn-block</code></p>
                                    <button class="btn btn-outline-secondary btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                    <button class="btn btn-outline-primary btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                    <button class="btn btn-outline-success btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                    <button class="btn btn-outline-info btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                    <button class="btn btn-outline-warning btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                    <button class="btn btn-outline-danger btn-lg btn-block" type="button">Block level
                                        button
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
        <footer class="c-footer">
            <div><a href="https://coreui.io">CoreUI</a> © 2020 creativeLabs.</div>
            <div class="ml-auto">Powered by&nbsp;<a href="https://coreui.io/">CoreUI</a></div>
        </footer>
    </div>
</div>

<script src="{{asset('js/coreui.js')}}"></script>

</body>
</html>
