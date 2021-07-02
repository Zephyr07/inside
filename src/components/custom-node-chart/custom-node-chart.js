import React from "react";
import OrganizationChart from "../chart/ChartContainer";
import MyNode from "./my-node";

import sarra from '../../asset/images/personnel/SARRA.jpg'
import stephane from '../../asset/images/personnel/STEPHANE.jpg'
import carine from '../../asset/images/personnel/CARINE.jpg'
import edward from '../../asset/images/personnel/EDWARD.jpg'
import patrick from '../../asset/images/personnel/PATRICK.jpg'
import gerard from '../../asset/images/personnel/GERARD.jpg'
import suzanne from '../../asset/images/personnel/SUZANNE.jpg'
import hermand from '../../asset/images/personnel/HERMAND.jpg'
import manuella from '../../asset/images/personnel/MANUELLA.jpg'
import landry from '../../asset/images/personnel/LANDRY.jpg'
import prada from '../../asset/images/personnel/prada.jpg'
import solange from '../../asset/images/personnel/SOLANGE.jpg'

const CustomNodeChart = () => {
  const ds = {
      id: "n2", name: "Stéphane SOUMAHORO", title: "Directeur Général", phone: 696969699, ipphone: 20000,
      image: stephane,
      city : 'Douala',
      children : [
          { id: "n91",
              name: "Patric DJAKOU",
              title: "Directeur d'Usine",
              image: patrick,
              phone: "696 969 699",
              ipphone: "21 000"  ,
              city: 'Douala'
          },
          {
              id: "n3",
              name: "Carine KOYOU",
              title: "Directeur Administratif et Financier",
              phone: "696 969 699",
              ipphone: "21 000"  ,
              city: 'Douala',
              image: carine,
              children : [
                  {
                      id: "n31",
                      name: "Hermand DJOUM",
                      title: "Chef de Département Comptabilité et Finance",
                      phone: "696 969 699",
                      ipphone: "21 000"  ,
                      city: 'Douala',
                      image: hermand,
                  },
                  { id: "n92",
                      name: "Edward NANDA",
                      title: "Responsable des Systèmes d'Informations",
                      image: edward,
                      phone: "696 969 699",
                      ipphone: "21 000"  ,
                      city: 'Douala'
                  },
                  { id: "n93",
                      name: "Manuella DEENY",
                      title: "Responsable de l'Administration et de la Paie",
                      image: manuella,
                      phone: "696 969 699",
                      ipphone: "21 000"  ,
                      city: 'Douala'
                  },
                  { id: "n94",
                      name: "Suzanne JABEA",
                      title: "Assistante, Chargée de la Fiscalité",
                      image: suzanne,
                      phone: "696 969 699",
                      ipphone: "21 000"  ,
                      city: 'Douala'
                  }

              ]
          },
          { id: "n95",
              name: "Landry MAÏ de MAY",
              title: "Directeur Commercial et Marketing",
              image: landry,
              phone: "696 969 699",
              ipphone: "21 000"  ,
              city: 'Douala',
              children : [
                  {
                      id: "n3",
                      name: "Prada AYANGMA",
                      title: "Directeur Administratif et Financier",
                      phone: "696 969 699",
                      ipphone: "21 000"  ,
                      city: 'Douala',
                      image: prada,
                  },
                  { id: "n9",
                      name: "Gérard KOTTO",
                      title: "Directeur Commercial et Marketing",
                      image: gerard,
                      phone: "696 969 699",
                      ipphone: "21 000"  ,
                      city: 'Douala'
                  }
              ]
          },
          { id: "n9",
              name: "Solange KAMGA",
              title: "Directeur des Ventes Directes",
              image: solange,
              phone: "696 969 699",
              ipphone: "21 000"  ,
              city: 'Douala'
          }

      ]
  };

  return <OrganizationChart datasource={ds} chartClass="myChart" NodeTemplate={MyNode}/>;
};

export default CustomNodeChart;
