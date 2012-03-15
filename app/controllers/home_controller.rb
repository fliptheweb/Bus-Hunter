class HomeController < ApplicationController
  def index
  end

  def api
    #response = Hash.from_xml open("http://twitter.com/users/show/usejquery.xml").read
    #render :text => response["user"]["followers_count"]
    #URI.parse(URI.encode('http://www.yr.no/sted/Finland/Västra_Finland/Askainen/varsel.xml'))
    url = "http://78.31.72.3/bus/common/map6/getRoutesVehicles.php?city=ryazan&ids=13;0|12;0|35;0|34;0|28;0|29;0|20;0|21;0|16;0|19;0|1;0|2;0|22;0|23;0&r=0.637920456007123"
    xml_input = Net::HTTP.get(URI.parse(URI.encode(url)))
    @json = Hash.from_xml(xml_input).to_json
    render :json => @json
  end
end
