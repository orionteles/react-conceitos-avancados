import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'
import { FaPen, FaTrash } from 'react-icons/fa'
import Paginacao from '../../components/table/Paginacao'

const Filmes = () => {

    const [filmes, setFilmes] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        recuperarDados(page)
    }, [page])

    const recuperarDados = (pagina = 1) => {
        apiFilmes.get(`movie/popular?language=pt-BR&page=${pagina}`).then(dados => {
            setFilmes(dados.data.results)
            setPage(dados.data.page)
            setTotal(dados.data.total_results)
            // document.getElementById('table').scrollIntoView()
        })
    }

    return (
        <>
            <Table striped bordered hover id="table">
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>Título</th>
                        <th>Título Original</th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map(item => (
                        <tr key={item.id}>
                            <td>
                                <FaPen className="mr-3" title="Alterar" />
                                <FaTrash title="Excluir" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.original_title}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Paginacao page={page} total={total} onClick={(pagina) => recuperarDados(pagina)} />


        </>
    )
}

export default Filmes
