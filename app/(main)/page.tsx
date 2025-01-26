import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
export default function Home() {

  const cardInfo=[
    {
      id:1,
      title:"Posts",
      icon:<Newspaper size={72}/>,
      num:60
    },
    {
      id:2,
      title:"Categories",
      icon:<Folder size={72}/>,
      num:10
    },
    {
      id:3,
      title:"Users",
      icon:<User size={72}/>,
      num:750
    },
    {
      id:4,
      title:"Comments",
      icon:<MessageCircle size={72}/>,
      num:1200
    },
  ]
  return (
   <>
   <div className="flex flex-col md:flex-row gap-3 justify-between mb-5 flex-wrap">
    {
      cardInfo.map((card,index)=>(
        <DashboardCard card={card} key={index}/>
      ))
    }
   </div>
   <AnalyticsChart/>
  <PostsTable title="Latest Posts" limit={5}/>
   </>
  );
}
