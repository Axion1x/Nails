'use client'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './table.module.scss'

const Table = () => {
    const list = useSelector(state => state.services);

    const renderCategory = (category) => (
        <div key={category.category} className={style.itemContainer}>
            <div className='text-center fs-3 fw-bold'>{category.category}</div>
            {category.data.map(service => (
                <div key={service.name} className="border-secondary mb-2 border-bottom d-flex justify-content-between align-items-center">
                    <div className="fs-5">{service.name}</div>
                    <div>
                        <span className="fs-5 fw-bold" style={{color: '#00FFD1'}}> {service.price}</span>
                        <span> грн</span>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <h1 className='text-center fs-1 fw-bold'>Послуги та ціни</h1>
            <Container className='px-5'>
                <Row>
                    <Col md={6} className={style.block}>
                        {list.slice(0, 2).map(renderCategory)}
                    </Col>
                    <Col md={6} className={style.block}>
                        {list.slice(2).map(renderCategory)}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Table;


