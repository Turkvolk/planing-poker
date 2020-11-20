import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://planning-pocker.service.signalr.net/client/?hub=default")
  .build();
