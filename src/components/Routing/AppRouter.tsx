import { Redirect, Route, Switch } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/constURL';
import { authRouter, publicRouter } from '../../utils/routes';

const AppRouter = () => {
    return (
        <Switch>
            {authRouter.map(({ path, component }) => (
                <Route exact key={path} path={path} component={component} />
            ))
            }
            {publicRouter.map(({ path, component}) => (
                <Route exact key={path} path={path} component={component}/>
            ))
            }
            <Redirect to={MAIN_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;