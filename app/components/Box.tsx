export default function Box() {
    
    const steps = [
      {
        number: 1,
        title: "onboarding",
        description:
          "We gather for briefing and, just a few days after, our proposal is ready. All the details are taken care of, including the contract and timings.",
        video: "sensa-one.mp4"
      },
      {
        number: 2,
        title: "model",
        description:
          "We partner in a monthly or project-based basis, depending on what fits better. Want to cancel? No questions asked. Want to extend? Just let us know.",
        video: "sensa-two.mp4"
      },
      {
        number: 3,
        title: "sprints",
        description:
          "Together, we iterate, test, and meet weekly to discussing the solutions. We send an async update as well, so everyone's on track.",
        video: "sensa-three.mp4"
      },
      {
        number: 4,
        title: "handoff",
        description:
          "When our work is done, we document it and arrange governance. We're available to help before, during, and after our collaboration.",
        video: "sensa-four.mp4"
      },
    ]
  
    return (
      <div className="main-container bg-black h-[65vh] text-white p-2 ">

        <div className="wrapper border-t border-l border-r border-white/10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px w-ful mx-15">
          {steps.map((step) => (
          
          <div key={step.number} className="box-container p-8 border-r border-white/10">
              <div className="flex flex-col gap-3 mt-16">
              
                <div className="flex flex-col items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  
                  <h3 className="text-3xl font-bold leading-tight">{step.title}</h3>
                  <span className="border-t border-white/10 w-full"></span>
                </div>
          
                <p className="text-zinc-100 leading-relaxed">{step.description}</p>

                <div className="video w-full h-full mt-10 ">
                  <video 
                    src={`/videos/${step.video}`} 
                    muted 
                    loop 
                    autoPlay 
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    onError={() => console.error(`Failed to load video: ${step.video}`)}
                  />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    )
  }
  