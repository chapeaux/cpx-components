// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { serveTls } from "https://deno.land/std@0.155.0/http/server.ts";

type PixelPacket = {
  x:Number
  y:Number
  color:String
}

class PixelBoard {
  constructor(dimensions=[8,8],pixelSize=10) {
    this.xMax = dimensions[0];
    this.yMax = dimensions[1];
  }
  xMax:number
  yMax:number

  update(packet:PixelPacket) {
    
  }

}

const USERS = new Map();

function handler(req: Request): Response {
  const upgrade = req.headers.get("upgrade") || "";
  let response, socket: WebSocket;
  try {
    ({ response, socket } = Deno.upgradeWebSocket(req));
  } catch {
    return new Response("request isn't trying to upgrade to websocket.");
  }
  socket.onopen = () => {
    console.log('socket opened');
    USERS.set(crypto.randomUUID, socket);
  }
  socket.onmessage = (e) => {
    console.log("socket message:", e.data);
    
    socket.send(new Date().toString());
  };
  socket.onerror = (e) => console.log("socket errored:", e);
  socket.onclose = () => console.log("socket closed");
  return response;
}

serveTls(handler, {
  port:8443, 
  certFile: `${Deno.cwd()}/localhost.pem`,
  keyFile: `${Deno.cwd()}/localhost-key.pem`
})
/*
let ws = new WebSocket(ws://localhost:8080);
ws.send("Test Message!");
*/
