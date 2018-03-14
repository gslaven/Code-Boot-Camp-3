-- Find States in Address table but not In state Table
select a.state AddressState, s.state StateState
from useraddress a 
left join state s
on a.state = s.state
where s.state is null
group by a.state
order by a.state ;

-- Insert Missing States from Address table into STate Table
INSERT INTO state (state) 
select a.state
from useraddress a 
left join state s
on a.state = s.state
where s.state is null
group by a.state
order by a.state ;

-- Find Addresses in the orders table that do not have The correct DestinationState
Select o.destinationState, a.State StateState, a.userAddressTypeId,  o.*, a.*
from
Orders o
Right join
useraddress a on o.userid = a.userid
where destinationState <> state
or
destinationState = state;

-- Update the Orders table with the newly corrected Address table
-- because all of the states are in the state table now
UPDATE Orders o, useraddress a, state s
SET o.destinationState = a.state
where o.userid = a.userid 
and s.state = a.state
and a.userAddressTypeId = 1;


