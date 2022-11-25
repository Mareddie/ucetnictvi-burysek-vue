<template>
    <header class="row text-bg-dark">
        <nav class="navbar navbar-dark navbar-expand-lg py-3 px-3 px-md-5">
            <!-- brand - mobile variant -->
            <a class="navbar-brand d-md-none px-3 px-md-2" href="/">
                <h1 id="logoTextShort">Účetnictví<br>Matouš Burýšek</h1>
            </a>
            <!-- brand - PC variant -->
            <a class="navbar-brand d-none d-md-block pt-2 px-3 px-md-2" id="navbar-brand" href="/">
                <img class="d-inline-block align-text-top" id="logoImage" src="/src/assets/images/logo.png" height="45">
                <h1 class="d-inline-block align-text-top ms-3" id="logoTextLong">Účetnictví Matouš Burýšek</h1>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-3 ms-md-2 ms-lg-auto mb-2 mb-md-0">
                    <RouterLink to="/">
                        <li class="nav-item">
                            <a class="nav-link">O mně</a>
                            <!-- Tady byl původně odkaz na kotvu #matous-burysek -->
                        </li>
                    </RouterLink>
                    <RouterLink to="/">
                        <li class="nav-item">
                            <a class="nav-link">Služby</a>
                            <!-- Tady byl původně odkaz na kotvu #sluzby -->
                        </li>
                    </RouterLink>
                    <RouterLink to="/clanky">
                        <li class="nav-item">
                            <a class="nav-link">Články</a>
                        </li>
                    </RouterLink>
                    <RouterLink to="/kontakt">
                        <li class="nav-item">
                            <a class="nav-link">Kontakt</a>
                        </li>
                    </RouterLink>

                </ul>
            </div>
        </nav>
    </header>
</template>