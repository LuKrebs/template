require 'open-uri'
require 'json'

class WelcomeController < ApplicationController

  def index

    if request.xhr?

      arrival = params[:arrival].to_date
      departure = params[:departure].to_date

      url = "https://booking.cafehostel.com.br/en/hqb/drjl9zZq6b/availability?arrival=#{arrival.year}-#{arrival.month}-#{arrival.day}&departure=#{departure.year}-#{departure.month}-#{departure.day}"
      raw_url = open(url).read
      html = Nokogiri::HTML(raw_url)

      even = html.search(".even")
      odd = html.search(".odd")
      @images = []
      @names = []
      @prices = []
      @units = []
      # binding.pry

      even.each do |item|
        @images <<  item.search("img").attribute('src').text
        @names << item.search('.col-md-3 h6').text.delete("\n").strip.split("  ")
        @prices << item.search(".col-md-5 h6 b").text.delete("\n").strip.split("  ")
        if item.search("select").attribute('disabled').nil?
          @units << item.search("select").text.delete("\n").strip.split(" ")
        else
          @units << ["disabled"]
        end
      end

      odd.each do |item|
        @images <<  item.search("img").attribute('src').text
        @names << item.search('.col-md-3 h6').text.delete("\n").strip.split("  ")
        @prices << item.search(".col-md-5 h6 b").text.delete("\n").strip.split("  ")
        if item.search("select").attribute('disabled').nil?
          @units << item.search("select").text.delete("\n").strip.split(" ")
        else
          @units << ["disabled"]
        end
      end

      @names.each do |name|
        name.map { |n| name.delete(n) if n == "" }
      end

      @prices.each do |price|
        price.map { |p| price.delete(p) if p == "" }
      end

      @result = {
        images: @images,
        names: @names,
        prices: @prices,
        units: @units
      }

      respond_to do |format|
        format.json { render json: @result }
        format.html
      end
    end
  end
end
