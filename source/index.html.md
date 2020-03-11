---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - java
  - csharp

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/slatedocs/slate'>Documentation Powered by Slate</a>

includes:   
  - requests
  - communications

search: true
---

# Introduction
Welcome to Integra Api! The main goal for this api is to ease the communication between the terminal and the POS.
It is supposed to be available to both Java and .NET.

# Complete Use Case
```java
CommunicationContext context = CommunicationContext.createClientSocket(Datalink.DATALINK, "192.168.61.93", 1234);

IStatusUpdateHandler statusHandler = new IStatusUpdateHandler() {
    @Override
    public void onStatusUpdate(StatusUpdate update) {
        System.out.println(update);
    }
}

Integra integra = new Integra(context, statusHandler);

HashMap<String, String> options = new HashMap<>();
options.put(Request.AMOUNT, "12.1");
Request saleRequest = ResquestFactory.getInstance().createRequest(SettlementType.SALE, options);

IResponseHandler handler = new IResponseHandler() {
  @Override
  public void onResponse(Response response) {
    System.out.println(response);
  }
};

integra.sendRequest(request, handler);
```

```csharp
CommunicationContext context = CommunicationContext.CreateClientSocket(Datalink.DATALINK, "192.168.61.93", 1234);
Integra integra = new Integra(context, statusHandler);

Dictionary<string, string> options = new Dictionary<>();
options.Add(Request.AMOUNT, "12.1");
Request saleRequest = ResquestFactory.getInstance().CreateRequest(SettlementType.SALE, options);

// The implementation isn't showed here
IMessageHandler handler = new SimpleMessageHandler();
integra.SendRequest(request, handler);
```

In order to use this api, it is necessary to create an instance of Integra, for that is also necessary
a CommunicationContext. The way to create a CommunicationContext is explained after.
Later you can use the instance of Integra to send requests. The sending method requires a IMessageHandler instance,
where it receives all the status updates and the response.

