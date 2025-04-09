import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Building } from "lucide-react";
import { Job } from "@/types";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="h-full hover:border-primary transition-colors">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                {job.companyLogo ? (
                  <img 
                    src={job.companyLogo} 
                    alt={`${job.companyName} logo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Building className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.companyName}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {job.featured && <Badge variant="success">Featured</Badge>}
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm line-clamp-2">{job.description}</p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {job.jobType && (
              <Badge variant="outline">{job.jobType}</Badge>
            )}
            {job.experienceLevel && (
              <Badge variant="outline">{job.experienceLevel}</Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex items-center justify-between border-t mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{job.postedAt}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default JobCard;