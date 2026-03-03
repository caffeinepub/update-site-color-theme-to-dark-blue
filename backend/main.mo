import Map "mo:core/Map";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Lead = {
    name : Text;
    hotelName : Text;
    city : Text;
    numberOfRooms : Nat;
    phoneNumber : Text;
    email : Text;
    createdAt : Time.Time;
  };

  module Lead {
    public func compare(lead1 : Lead, lead2 : Lead) : Order.Order {
      Text.compare(lead1.name, lead2.name);
    };

    public func compareByCreatedAt(lead1 : Lead, lead2 : Lead) : Order.Order {
      Int.compare(lead1.createdAt, lead2.createdAt);
    };
  };

  type LeadId = Nat;

  let leads = Map.empty<LeadId, Lead>();
  var nextId = 0;

  public shared ({ caller }) func submitLead(name : Text, hotelName : Text, city : Text, numberOfRooms : Nat, phoneNumber : Text, email : Text) : async () {
    let lead : Lead = {
      name;
      hotelName;
      city;
      numberOfRooms;
      phoneNumber;
      email;
      createdAt = Time.now();
    };

    leads.add(nextId, lead);
    nextId += 1;
  };

  public query ({ caller }) func getLead(id : LeadId) : async Lead {
    switch (leads.get(id)) {
      case (null) { Runtime.trap("Lead does not exist") };
      case (?lead) { lead };
    };
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    leads.values().toArray().sort();
  };

  public query ({ caller }) func getLeadsByName() : async [Lead] {
    leads.values().toArray().sort();
  };

  public query ({ caller }) func getLeadsByCreatedAt() : async [Lead] {
    leads.values().toArray().sort(Lead.compareByCreatedAt);
  };
};
