import "../styles/App.scss";
import Wave from "react-wavify";

function App() {

	return <div className="app">

		<div className="waves">

			<svg width="100%" height="100%" id="svg" xmlns="http://www.w3.org/2000/svg" className="wave transition duration-300 ease-in-out delay-150">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7" >
						</stop>
						<stop offset="95%" stopColor="#8ED1FC" >
						</stop>
					</linearGradient>
				</defs>
				<path d="M 0,500 C 0,500 0,100 0,100 C 56.12820512820514,82.50256410256411 112.25641025641028,65.00512820512822 198,69 C 283.7435897435897,72.99487179487178 399.102564102564,98.48205128205127 489,110 C 578.897435897436,121.51794871794873 643.3333333333334,119.06666666666668 717,111 C 790.6666666666666,102.93333333333332 873.5641025641025,89.25128205128205 963,92 C 1052.4358974358975,94.74871794871795 1148.4102564102564,113.92820512820512 1229,118 C 1309.5897435897436,122.07179487179488 1374.7948717948718,111.03589743589744 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.265" className="transition-all duration-300 ease-in-out delay-150 path-0" >
				</path>
			</svg>
			<svg width="100%" height="100%" id="svg" xmlns="http://www.w3.org/2000/svg" className="wave transition duration-1200 ease-in-out delay-300">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7" >
						</stop>
						<stop offset="95%" stopColor="#8ED1FC" >
						</stop>
					</linearGradient>
				</defs>
				<path d="M 0,500 C 0,500 0,100 0,100 C 56.12820512820514,82.50256410256411 112.25641025641028,65.00512820512822 198,69 C 283.7435897435897,72.99487179487178 399.102564102564,98.48205128205127 489,110 C 578.897435897436,121.51794871794873 643.3333333333334,119.06666666666668 717,111 C 790.6666666666666,102.93333333333332 873.5641025641025,89.25128205128205 963,92 C 1052.4358974358975,94.74871794871795 1148.4102564102564,113.92820512820512 1229,118 C 1309.5897435897436,122.07179487179488 1374.7948717948718,111.03589743589744 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.265" className="transition-all duration-1500 ease-in-out delay-500 path-0" >
				</path>
			</svg>
			<svg width="100%" height="100%" id="svg" xmlns="http://www.w3.org/2000/svg" className="wave transition duration-150 ease-in-out delay-500">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7" >
						</stop>
						<stop offset="95%" stopColor="#8ED1FC" >
						</stop>
					</linearGradient>
				</defs>
				<path d="M 0,500 C 0,500 0,100 0,100 C 56.12820512820514,82.50256410256411 112.25641025641028,65.00512820512822 198,69 C 283.7435897435897,72.99487179487178 399.102564102564,98.48205128205127 489,110 C 578.897435897436,121.51794871794873 643.3333333333334,119.06666666666668 717,111 C 790.6666666666666,102.93333333333332 873.5641025641025,89.25128205128205 963,92 C 1052.4358974358975,94.74871794871795 1148.4102564102564,113.92820512820512 1229,118 C 1309.5897435897436,122.07179487179488 1374.7948717948718,111.03589743589744 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.265" className="transition-all duration-150 ease-in-out delay-750 path-0" >
				</path>
			</svg>






			{/* <svg width="100%" height="100%" id="svg" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7" >
						</stop>
						<stop offset="95%" stopColor="#8ED1FC">
						</stop>
					</linearGradient>
				</defs>
				<path className="path" d="M 0,500 C 0,500 0,100 0,100 C 82.17435897435897,87.71794871794872 164.34871794871793,75.43589743589743 249,86 C 333.65128205128207,96.56410256410257 420.7794871794871,129.97435897435898 497,129 C 573.2205128205129,128.02564102564102 638.5333333333335,92.66666666666667 723,82 C 807.4666666666665,71.33333333333333 911.0871794871794,85.35897435897435 993,99 C 1074.9128205128206,112.64102564102565 1135.1179487179486,125.8974358974359 1206,126 C 1276.8820512820514,126.1025641025641 1358.4410256410256,113.05128205128204 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.265" className="transition-all duration-300 ease-in-out delay-150 path-0" >
				</path>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7" >
						</stop>
						<stop offset="95%" stopColor="#8ED1FC">
						</stop>
					</linearGradient>
				</defs>
				<path className="path" d="M 0,500 C 0,500 0,200 0,200 C 56.40769230769229,202.83846153846153 112.81538461538457,205.67692307692306 203,205 C 293.1846153846154,204.32307692307694 417.1461538461539,200.13076923076923 501,202 C 584.8538461538461,203.86923076923077 628.5999999999999,211.79999999999998 687,204 C 745.4000000000001,196.20000000000002 818.4538461538461,172.66923076923075 918,176 C 1017.5461538461539,179.33076923076925 1143.5846153846155,209.52307692307693 1235,218 C 1326.4153846153845,226.47692307692307 1383.2076923076922,213.23846153846154 1440,200 C 1440,200 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-1" >
				</path>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7">
						</stop>
						<stop offset="95%" stopColor="#8ED1FC">
						</stop>
					</linearGradient>
				</defs>
				<path className="path" d="M 0,500 C 0,500 0,300 0,300 C 91.2948717948718,300.7923076923077 182.5897435897436,301.5846153846154 265,303 C 347.4102564102564,304.4153846153846 420.93589743589746,306.4538461538462 485,313 C 549.0641025641025,319.5461538461538 603.6666666666667,330.59999999999997 675,317 C 746.3333333333333,303.40000000000003 834.3974358974358,265.1461538461538 919,265 C 1003.6025641025642,264.8538461538462 1084.7435897435896,302.81538461538463 1171,315 C 1257.2564102564104,327.18461538461537 1348.628205128205,313.5923076923077 1440,300 C 1440,300 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-2">
				</path>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stopColor="#F78DA7">
						</stop>
						<stop offset="95%" stopColor="#8ED1FC">
						</stop>
					</linearGradient>
				</defs>
				<path className="path" d="M 0,500 C 0,500 0,400 0,400 C 67.75384615384615,412.30256410256413 135.5076923076923,424.6051282051282 209,422 C 282.4923076923077,419.3948717948718 361.723076923077,401.8820512820513 439,404 C 516.276923076923,406.1179487179487 591.5999999999999,427.8666666666667 691,431 C 790.4000000000001,434.1333333333333 913.876923076923,418.651282051282 1001,409 C 1088.123076923077,399.348717948718 1138.8923076923077,395.5282051282052 1206,395 C 1273.1076923076923,394.4717948717948 1356.5538461538463,397.2358974358974 1440,400 C 1440,400 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-3">
				</path>
			</svg> */}
		</div>

		{/* <div className="waves">
      <Wave fill='url(#gradient)'
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.1,
          points: 3
        }}
        className="wave"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#F78DA7">
            </stop>
            <stop offset="95%" stopColor="#8ED1FC">
            </stop>
          </linearGradient>
        </defs>
      </Wave>

      <Wave fill='url(#gradient1)'
        paused={false}
        options={{
          height: 10,
          amplitude: 35,
          speed: 0.25,
          points: 4
        }}
        className="wave"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#5A22A7">
			</stop>
			<stop offset="95%" stopColor="#8A17F0">
			</stop>
          </linearGradient>
        </defs>
      </Wave> */}

		{/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
	<defs>
		<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
			<stop offset="5%" stopColor="#F78DA7" >
			</stop>
			<stop offset="95%" stopColor="#8ED1FC">
			</stop>
		</linearGradient>
	</defs>
	<path d="M 0,500 C 0,500 0,100 0,100 C 82.17435897435897,87.71794871794872 164.34871794871793,75.43589743589743 249,86 C 333.65128205128207,96.56410256410257 420.7794871794871,129.97435897435898 497,129 C 573.2205128205129,128.02564102564102 638.5333333333335,92.66666666666667 723,82 C 807.4666666666665,71.33333333333333 911.0871794871794,85.35897435897435 993,99 C 1074.9128205128206,112.64102564102565 1135.1179487179486,125.8974358974359 1206,126 C 1276.8820512820514,126.1025641025641 1358.4410256410256,113.05128205128204 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.265" className="transition-all duration-300 ease-in-out delay-150 path-0" >
	</path>
	<defs>
		<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
			<stop offset="5%" stopColor="#F78DA7" >
			</stop>
			<stop offset="95%" stopColor="#8ED1FC">
			</stop>
		</linearGradient>
	</defs>
	<path d="M 0,500 C 0,500 0,200 0,200 C 56.40769230769229,202.83846153846153 112.81538461538457,205.67692307692306 203,205 C 293.1846153846154,204.32307692307694 417.1461538461539,200.13076923076923 501,202 C 584.8538461538461,203.86923076923077 628.5999999999999,211.79999999999998 687,204 C 745.4000000000001,196.20000000000002 818.4538461538461,172.66923076923075 918,176 C 1017.5461538461539,179.33076923076925 1143.5846153846155,209.52307692307693 1235,218 C 1326.4153846153845,226.47692307692307 1383.2076923076922,213.23846153846154 1440,200 C 1440,200 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-1" >
	</path>
	<defs>
		<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
			<stop offset="5%" stopColor="#F78DA7">
			</stop>
			<stop offset="95%" stopColor="#8ED1FC">
			</stop>
		</linearGradient>
	</defs>
	<path d="M 0,500 C 0,500 0,300 0,300 C 91.2948717948718,300.7923076923077 182.5897435897436,301.5846153846154 265,303 C 347.4102564102564,304.4153846153846 420.93589743589746,306.4538461538462 485,313 C 549.0641025641025,319.5461538461538 603.6666666666667,330.59999999999997 675,317 C 746.3333333333333,303.40000000000003 834.3974358974358,265.1461538461538 919,265 C 1003.6025641025642,264.8538461538462 1084.7435897435896,302.81538461538463 1171,315 C 1257.2564102564104,327.18461538461537 1348.628205128205,313.5923076923077 1440,300 C 1440,300 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-2">
	</path>
	<defs>
		<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
			<stop offset="5%" stopColor="#F78DA7">
			</stop>
			<stop offset="95%" stopColor="#8ED1FC">
			</stop>
		</linearGradient>
	</defs>
	<path d="M 0,500 C 0,500 0,400 0,400 C 67.75384615384615,412.30256410256413 135.5076923076923,424.6051282051282 209,422 C 282.4923076923077,419.3948717948718 361.723076923077,401.8820512820513 439,404 C 516.276923076923,406.1179487179487 591.5999999999999,427.8666666666667 691,431 C 790.4000000000001,434.1333333333333 913.876923076923,418.651282051282 1001,409 C 1088.123076923077,399.348717948718 1138.8923076923077,395.5282051282052 1206,395 C 1273.1076923076923,394.4717948717948 1356.5538461538463,397.2358974358974 1440,400 C 1440,400 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-3">
	</path>
</svg> */}


	</div>

}

export default App;


