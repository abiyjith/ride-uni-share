import RegistrationForm from '@/components/RegistrationForm';
import heroImage from '@/assets/campus-rideshare-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Campus Rideshare
                </span>
                <br />
                <span className="text-foreground">
                  Connect & Ride
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join your campus community for safe, convenient, and eco-friendly rides. 
                Share the journey with verified students and staff.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-trust/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-trust"></div>
                </div>
                <span className="text-sm font-medium">Verified Members Only</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm font-medium">Real-time Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <span className="text-sm font-medium">Cost Sharing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-trust/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-trust"></div>
                </div>
                <span className="text-sm font-medium">Eco-friendly</span>
              </div>
            </div>
            
            {/* Hero Image for mobile */}
            <div className="lg:hidden">
              <img 
                src={heroImage} 
                alt="Campus Rideshare Community" 
                className="w-full h-64 object-cover rounded-2xl shadow-strong"
              />
            </div>
          </div>

          {/* Right side - Registration Form */}
          <div className="flex justify-center lg:justify-end">
            <RegistrationForm />
          </div>
        </div>

        {/* Hero Image for desktop */}
        <div className="hidden lg:block mt-16">
          <img 
            src={heroImage} 
            alt="Campus Rideshare Community" 
            className="w-full h-96 object-cover rounded-3xl shadow-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
