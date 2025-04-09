import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Building, MapPin, Briefcase } from "lucide-react";
import { Company } from "@/types";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Link to={`/companies/${company.id}`}>
      <Card className="h-full hover:border-primary transition-colors">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center overflow-hidden">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Building className="h-8 w-8 text-muted-foreground" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{company.name}</h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm line-clamp-3">{company.description}</p>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4" />
            <span>{company.jobCount} open positions</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;