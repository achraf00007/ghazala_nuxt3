var prod = false;

var configDev = {
    societeId: 37,
    siteUrl: 'https://new.markoub.ma/api/societewebsite/' 
}

var configProd = {
    societeId: 37,
    siteUrl: 'https://www.markoub.ma/api/societewebsite/' 
}

export default prod ? configProd : configDev;