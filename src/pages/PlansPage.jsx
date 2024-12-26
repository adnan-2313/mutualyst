import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plansList } from "@/utils/constant";
const PlansPage = () => {
  return (
    <div className="flex flex-col pt-20 pb-8">
      <h2 className="text-4xl sm:text-5xl text-zinc-950 dark:text-zinc-300 mx-auto font-extrabold">
        What we Offers?
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {plansList.map((item) => {
          return (
            <Card
              className="dark:bg-zinc-950 w-[300px]  dark:text-white dark:border-zinc-600"
              key={item.id}
            >
              <CardHeader>
                <CardTitle className="text-3xl">{item.title}</CardTitle>
                <CardDescription>&#8377;{item.price} / month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="">
                  {item.features.map((feat) => {
                    return (
                      <li className="py-1 max-sm:text-sm" key={feat}>
                        {feat}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full dark:border-zinc-300 border-zinc-500 text-black dark:text-white"
                >
                  Buy
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PlansPage;
