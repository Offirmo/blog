+++ https://medium.com/javascript-scene/angular-2-vs-react-the-ultimate-dance-off-60e7dfbc379c

import { foo } from '../libs/foo'
import { bar } from './libs/bar'

interface InjectableDependencies {
    foo: typeof foo
}

const defaultDependencies: InjectableDependencies = {
    foo,
}

function factory(dependencies: Partial<InjectableDependencies> = {}) {
    const { foo } = Object.assign({}, defaultDependencies, dependencies)

    function doStuff(x): Promise<void> {
        return foo().then(x => bar(x))
    }

    return {
        doStuff,
    }
}

const defaultInstance = factory()
const doStuff = defaultInstance.doStuff

export {
    InjectableDependencies,
    factory,
    doStuff,
}
