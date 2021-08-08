import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Filmes from './pages/filmes/Filmes'
import FilmesDetalhes from './pages/filmes/FilmesDetalhes'
import FilmesTabela from './pages/filmes/FilmesTabela'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Filmes} />
        <Route exact path="/filmes" component={Filmes} />
        <Route exact path="/filmes/tabelas" component={FilmesTabela} />
        <Route exact path="/filmes/:id" component={FilmesDetalhes} />
      </Switch>
    </>
  )
}

export default Routes
