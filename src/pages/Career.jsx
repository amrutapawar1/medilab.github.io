import React from 'react';
import { map } from "lodash";
import BreadCrumb from '../components/common/BreadCrumb'
import { About } from '../assets/images/about';
import Upload from '../components/Upload';

const StandPartData = [
  {
    id: "1",
    title: "INTEGRITY",
    subtitle: "Integrity gives rise to trust. From the organization’s perspective, it’s our most valuable asset. The foundation for everything we do is Integrity. We always continue doing the correct thing, even when no one is observing."
  },
  {
    id: "2",
    title: "PASSION",
    subtitle: "Passion gives rise to excitement for whatever we do and however we do it. With Passion at the core of everything we do, we inspire excellence, nurture ideas and view honest failure as a learning opportunity for the coming time."
  },
  {
    id: "3",
    title: "INNOVATION",
    subtitle: "Innovation motivates action: to take risks, encourage curiosity and new ideas, learn from mistakes, and constantly strive to exceed expectations. Through innovation, we generate solutions for our customers."
  },
  {
    id: "4",
    title: "CULTURE",
    subtitle: "The positive spirit with which we support each other fosters open, honest, and meaningful relationships. We celebrate and embrace our diversity. We invest in each other because we win or lose as a team. United we stand, always."
  },
]
const Career = () => {
  return (
    <>
      <BreadCrumb label="Carrer" />
      <section className="container px-xl-50">
        <div className="ptb-50">
          <div className="card img-fluid">
            <img className="card-img-top" src={About.back} style={{ height: "400px" }} />
            <div className="card-img-overlay text-center mt-5">
              <h4 className="card-title" style={{ color: 'white' }}>Together Is Better.</h4>
              <p className="card-text">As we continue to grow and expand, we are very sure that we'll soon work together.</p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ paddingTop: "35px" }}>
        <h5 className="special-heading sub-title text-center mb-5">What makes us stand apart ?</h5>
        <div className="row">
          {
            map(StandPartData, item => {
              return (
                <div class="col-md-3 col-xs-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-header text-center">{item.title}</h6>
                      <p className="card-text center">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </section>
      <section className="text-center ptb-50" style={{ paddingTop: "35px", paddingBottom: "35px" }}>
        <h4>We are looking for people who believe in themselves.</h4>
        <div class="col-md-12 col-xs-4">
          <p>
            We are looking for brave people who love taking risks. We know that you won’t fail because we belive in your potential. We are creating a new culture, a new way of working & sharing thoughts. And we want to make it fast. Let’s do it together, shall we?
          </p>
        </div>
      </section>
      <Upload />
    </>
  )
}

export default Career