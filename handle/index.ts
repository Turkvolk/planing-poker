import { AzureFunction, Context } from "@azure/functions";
import * as signalR from "@microsoft/signalr";

const httpTrigger: AzureFunction = async function (
  context: Context,
  invocation: any
): Promise<void> {
  context.log(
    `Receive ${context.bindingData.message} from ${invocation.ConnectionId}.`
  );

  context.bindings.events.push({
    target: "newMessage",
    arguments: ["broadcast"],
  });
  
};

export default httpTrigger;
