


function ensureAuthenticatedToHamlet() {
    if (!promiseCache.authenticathedToHamlet) {
        promiseCache.authenticathedToHamlet = getNgServiceHamletUser()
            .then(ngServiceHamletUser => ngServiceHamletUser.authenticate())
            .then(() => {});
    }

    return promiseCache.authenticathedToHamlet;
}



        const identityPlatform = this.identityPlatform = {
            getCloudIdUserPermissions: () => {  xxx
                return Promise.resolve({
                    body: {
                        Resources: [
                            'adminId01',
                            'adminId02',
                            'adminId03',
                        ]
                    }
                })
            },


nearly missed:
Promise.resolve()
.then(() => foo())

to Promise.resolve(foo())



const contacts = new Promise((resolve, reject) => {
                if (!state.loggedIn) return resolve([]);

                const { search } = data;
                resolve(fetchGoogleContacts({ gapi, search }).then(
                  googleResponse => {
                    logger.log('gresp', googleResponse);
                    return [];
                  },
                ));
              })
