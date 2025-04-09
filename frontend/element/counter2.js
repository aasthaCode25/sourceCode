import Counterup from '../component/counterup';
function Counter2() {
    return (
      <>
        {/* <!-- Counters 2 --> */}
		<section className="counter-wraper-2 overlay-gradient-dark"> 
			<div className="counter-inner content-inner-3" style={{"backgroundImage":"url(images/background/bg14.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={5055}/>+</h2>
									<span className="title">Sex Workers Reached with HIV/STI Interventions</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-smile"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={255}/>+</h2>
									<span className="title">Women Living with HIV Received Support for Treatment Adherence</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-line-chart"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={2018}/>+</h2>
									<span className="title">Adolescents Benefited from Life Skill Education Sessions</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-startup"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={596}/>+</h2>
									<span className="title">Beneficiaries Participated in the Digital Financial Literacy Programme</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-confetti"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={3000}/>+</h2>
									<span className="title">Health Services Provided to Women Through Our General Health Initiative</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-confetti"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={6771}/>+</h2>
									<span className="title">Ration and Support Offered to Women and Children</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-confetti"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Counter2;