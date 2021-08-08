import { useEffect, useState } from "react"
import apiFilmes from "../../services/apiFilmes"

const FilmesDetalhes = (props) => {

    const [filme, setFilme] = useState({})

    useEffect(() => {
        const id = props.match.params.id

        apiFilmes.get('movie/' + id + '?language=pt-BR').then(results => {
            setFilme(results.data)
          })

    }, [props])

    return (
        <div>
            <h1>{filme.title}</h1>
        </div>
    )
}

export default FilmesDetalhes