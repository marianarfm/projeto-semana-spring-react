import NotificationButton from '../NotificationButton'
import './style.css'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" placeholder="Digite uma data aqui"/>
                    </div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" placeholder="Digite uma data aqui"/>
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">#001</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#002</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#003</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#004</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#005</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#006</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#007</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#008</td>
                                <td className="show576">17/11/2022</td>
                                <td>Nome</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard