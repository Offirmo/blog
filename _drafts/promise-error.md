


function ensureAuthenticatedToHamlet() {
    if (!promiseCache.authenticathedToHamlet) {
        promiseCache.authenticathedToHamlet = getNgServiceHamletUser()
            .then(ngServiceHamletUser => ngServiceHamletUser.authenticate())
            .then(() => {});
    }

    return promiseCache.authenticathedToHamlet;
}
