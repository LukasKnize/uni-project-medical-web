const search = (params) => {
  let thisPage = new URL(location.origin + "/uni-project-medical-web/vyhledavani/");
  thisPage.searchParams.append("search", params);
  window.location.href = thisPage;
};

const mainSearchBar = document.querySelector("#mainSearchBar");

const mainSearch = () => {
  search(mainSearchBar.value);
};

if (mainSearchBar) {
  const params = new URLSearchParams(document.location.search);
  const searchParam = params.get("search");
  if (searchParam) {
    mainSearchBar.value = searchParam;
  }
}

const mobileSearchBar = document.querySelector("#mobileSearchBar");

const mobileSearch = () => {
  search(mobileSearchBar.value);
};

const pcSearchBar = document.querySelector("#pcSearchBar");

const pcSearch = () => {
  search(pcSearchBar.value);
};
