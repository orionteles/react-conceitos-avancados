import React from "react";
import { Pagination } from "react-bootstrap"

const Paginacao = ({ page, total, perPage = 20, qtdPaginacao = 5, onClick }) => {

    const paginas = total / perPage
    const qtdBotoes = paginas < qtdPaginacao ? paginas : qtdPaginacao
    const metade = (qtdBotoes - Math.ceil(qtdBotoes / 2));

    let inicio = page - metade
    if ((page - metade <= 1)) {
        inicio = 1
    } else if (page + metade >= paginas) {
        inicio = paginas - qtdBotoes + 1
    }

    const botoes = []
    for (let i = inicio; i < (inicio + qtdBotoes); i++) {
        const active = page == i ? 'active' : ''
        botoes.push(
            <Pagination.Item
                active={active}
                onClick={() => onClick(i)}
            >{i}</Pagination.Item>
        )
    }

    return (
        <>
            {
                paginas != 1 &&
                <div>
                    <Pagination className="text-center">
                        <Pagination.First disabled={1 == page} onClick={() => onClick(1)} />
                        <Pagination.Prev disabled={1 == page} onClick={() => onClick((page - 1))} />
                        {botoes.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                        <Pagination.Next disabled={paginas == page} onClick={() => onClick(page + 1)} />
                        <Pagination.Last disabled={paginas == page} onClick={() => onClick(paginas)} />
                    </Pagination>
                </div>
            }
        </>
    )
}

export default Paginacao
