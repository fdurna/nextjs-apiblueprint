import React from "react";
import Router from 'next/router'
// utils
import { fDateTimeSuffix } from "../../utils/formatTime";
// antd
import { Row, Col, Card, Button } from "antd";

interface CardProps {
  data: {
    published_at: any;
    question: string;
    url: string;
    choices: [
      {
        url: string;
        choice: string;
        votes: number;
      }
    ];
  };
}

const Detail: React.FC<CardProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="top-section">
          <div className="sub-title">
            <h2>Detail Page</h2>
          </div>
          <div className="back-button">
            <Button type="primary" onClick={() => Router.back()}>Back Page</Button>
          </div>
        </div>
        <Row>
          <Col span={24}>
            <Card
              title={data.question}
              extra={<a href="#">{fDateTimeSuffix(data.published_at)}</a>}
            >
              {data.choices.map((item, index) => (
                <div className="item-list" key={index}>
                  <div className="choice">{item.choice}</div>
                  <div className="votes">{item.votes}</div>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;
  const res = await fetch(`https://polls.apiblueprint.org/questions/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Detail;
