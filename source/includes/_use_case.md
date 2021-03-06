# Complete Use Case
```java
IChannel channel = new ChannelClientSocket("192.168.1.11", 1234);
IDatalink datalink = new Datalink();
CommunicationContext context = new CommunicationContext(channel, datalink);

IStatusUpdateHandler statusHandler = new IStatusUpdateHandler() {
    @Override
    public void onStatusUpdate(StatusUpdate update) {
        System.out.println(update);
    }
}

Integra integra = new Integra(context, statusHandler);
integra.connect();

HashMap<String, String> options = new HashMap<>();
options.put(Request.AMOUNT, "12.1");
Request saleRequest = new SaleRequest(options);

IResponseHandler handler = new IResponseHandler() {
  @Override
  public void onResponse(Response response) {
    System.out.println(response);
  }
};

integra.sendRequest(request, handler);
```

```csharp
IChannel channel = new ChannelClientSocket("192.168.1.11", 1234);
IDatalink datalink = new Datalink();
CommunicationContext context = new CommunicationContext(channel, datalink);
Integra integra = new Integra(context, statusHandler);
integra.connect();

Dictionary<string, string> options = new Dictionary<>();
options.Add(Request.AMOUNT, "12.1");
Request saleRequest = new SaleRequest(options);

// The implementation isn't showed here
IMessageHandler handler = new SimpleMessageHandler();
integra.SendRequest(request, handler);
```

In order to use this api, it is necessary to create an instance of [Integra](#integra), for that is also necessary
a [CommunicationContext](#communicationcontext).
Later you can use the instance of Integra to send [requests](#request). The sending method requires a [IStatusUpdateHandler](#istatusupdatehandler) 
and [IResponseHandler](#iresponsehandler) instance, where it receives all the status updates and the response.  
  
**Note**: a code example is on the right.

![images/example.svg](images/example.svg)
