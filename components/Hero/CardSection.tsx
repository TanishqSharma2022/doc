import Card from "../Card"



const cardData = [
    {
      id: 1,
      title: "Predesign",
      description: "Stop cloning beautiful designs, ship high value project with powerful digital experience to drive engagement.",
      image: "",
      link: ""
    },
    {
      id: 2,
      title: "Design System",
      description: "Stop cloning beautiful designs, ship high value project with powerful digital experience to drive engagement.",
      image: "",
      link: ""
    },
    {
      id: 3,
      title: "UI UX Suites",
      description: "Stop cloning beautiful designs, ship high value project with powerful digital experience to drive engagement.",
      image: "",
      link: ""
    },
    {
      id: 4,
      title: "Handoff",
      description: "Stop cloning beautiful designs, ship high value project with powerful digital experience to drive engagement.",
      image: "",
      link: ""
    },
  ]

export default function CardSection() {
    return (
        <div className=" border  border-[1px] border-neutral-200 w-full px-[48px]  grid grid-cols-1 md:grid-cols-2 place-items-center justify-center ">
            {
                cardData.map((card) => {
                    return (
                        <div key={card.id} className="py-[32px] px-[64px] border  border-[1px] border-neutral-200 w-full">
                            <Card {...card} />
                        </div>
                    )
                })
            }

        </div>
    )
}