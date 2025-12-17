@import url('https://fonts.googleapis.com/css2?family=Lato:');

* {
    margin: 0;
    padding: 0;
}

:root {
    --white: #ffffff;

    /* Tons escurecidos */
    --dark1: #1e1e2f; 
    --dark2: #25253a;
    --dark3: #2f3a4d;
    --dark4: #4a5a66;
    --dark5: #7a8a91;
    --dark6: #171724;

    /* Cyan mais escuro */
    --cyan1: #70e3ea;
}


::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--dark3);
}

::-webkit-scrollbar-thumb {
    background: var(--dark4);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--dark4);
}


body {
    background-color: var(--dark1);
    height: 100vh;
    font-family: 'Lato';
}

header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: .8rem;
    background-color: var(--dark6);
    min-height: 50px;
}

nav {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-width: auto;
}

.nav-links {
    text-decoration: none;
    color: var(--white);
}

.nav-links:hover {
    color: var(--dark4);
    transition: .4s;
    text-decoration: underline;
}

.btn-actions {
    display: flex;
    gap: 1rem;
}

.link-action {
    padding: .6rem;
    font-size: .9rem;
    border-radius: 6px;
    cursor: pointer;
    transition: .4s;
}

.btn-action {
    background-color: transparent;
    border: 1px solid var(--white);
    color: var(--white);
}

.btn-action:hover {
    background-color: var(--dark3);
    border: var(--white);
}

.link-action {
    text-decoration: none;
    width: 200px;
    text-align: center;
}

main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;
    min-width: auto;
}

section {
    padding: 4rem;
}

.first-section {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    min-height: 350px;
}

.first-section>div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 200px;
}

h1 {
    font-size: 2rem;
    color: var(--white);
    letter-spacing: 6px;
}

strong {
    color: var(--cyan1);
}

.first-section p {
    color: var(--white);
    max-width: 400px;
    color: var(--white);
    text-align: left;
}

.box-img-main {
    max-width: 350px;
    padding: 1rem;
}

.img-profile {
    border-radius: 50%;
    width: 100%;
    box-shadow: 1px 1px 1px 1px var(--cyan1);
}

:is(.second-section, .fourth-section) {
    background-color: var(--dark2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

}

.second-section ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.second-section ul li {
    color: var(--dark4);
    letter-spacing: 2px;
    font-weight: bold;
}

.second-section ul li:hover {
    color: var(--dark5);
    transition: .4s;
    cursor: default;
}

.title {
    color: var(--dark5);
}

.third-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.third-section div {
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.third-section>div img {
    width: 250px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px var(--cyan1);
}

.third-section>div p {
    max-width: 600px;
    color: var(--white);
    text-align: left;
}

footer {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

footer>div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

#my-project-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2rem;
    justify-content: center;
    align-items: center;

}

#my-project-list a {
    text-decoration: none;
    color: var(--dark3);
}

#my-project-list a:hover{
    color: var(--dark5);
    transition: .4s;
    cursor: default;
}
