class HomeController < ApplicationController
  def index
  end

  def api
    #todo rewrite obj to normal view, lat/100000
    #url = "http://78.31.72.3/bus/common/map6/getRoutesVehicles.php?city=ryazan&ids=13;0|12;0|35;0|34;0|28;0|29;0|20;0|21;0|16;0|19;0|1;0|2;0|22;0|23;0&r=0.637920456007123"
    url = "http://78.31.72.3/bus/common/map6/getRoutesVehicles.php?city=vladivostok&ids=13;0|12;0|35;0|34;0|28;0|29;0|20;0|21;0|16;0|19;0|1;0|2;0|22;0|23;0|38;0|39;0|33;0|43;0|44;0|31;0|30;0|41;0|40;0|9;0|8;0|32;0|47;0|48;0|42;0|6;0|7;0|45;0|46;0|18;0|17;0|36;0|37;0|14;0|15;0|5;0|4;0|26;0|27;0|25;0|24;0|11;0|10;0&r=0.637920456007123"
    #url = "http://localhost:3000/sample.xml"
    xml_input = Net::HTTP.get(URI.parse(URI.encode(url)))
    @json = Hash.from_xml(xml_input).to_json
    render :json => @json
  end
end
