const WelcomeBanner = ({user}) => {
    return (
        <div class="bg-linear-to-r/hsl bg-indigo-600 rounded-md"
        
        >
            <h2 className= "text-white mx-0.5"
            white
            >
            Welcome   {user ? user.name : 'User'}!
            </h2>

            <p className="text-white"
            white
            >
                Track your health and stay on top of your chronic care management
                
            </p>

            {user?.disease && (
                <span>
                    {user.disease}
                </span>
            )}
        </div>
    );
};

export default WelcomeBanner;