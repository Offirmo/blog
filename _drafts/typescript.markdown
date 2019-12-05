How not having TypeScript lost me a morning (I know how to debug into this node app, though)
this._ldclient = new FeatureFlagClientImpl(
      getVariation => new FeatureFlagRepertoire(getVariation)
    )
incorrectly changed to:
this._ldclient = new FeatureFlagClientImpl(
      getVariation => {
         console.log('...')
         new FeatureFlagRepertoire(getVariation)
      }
    )
