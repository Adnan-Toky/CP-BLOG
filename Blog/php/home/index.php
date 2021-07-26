<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
    $servername = "localhost";
    $dbname = "blogs";
    $username = "root";
    $password = "";

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    $flag = true;
    $ret["data"] = array();
    $ret["data"]["popular"] = array();
    $ret["data"]["trending"] = array();
    $err = "";

    
    $conn = new mysqli($servername, $username, $password, $dbname);
    if($conn->connect_error){
        $err = "Something went wrong. Please try again." . $conn->connect_error;
        $flag = false;
    }
    else {
        $query = "SELECT * FROM posts ORDER BY view_count DESC";
        $sql = $conn->prepare($query);
        $sql->execute();
        $res = $sql->get_result();

        $file = "";

        if($res->num_rows > 0){
            while($row = $res->fetch_assoc()){
                $row_data = array();
                $file = $row["src_file"];
                $row_data["id"] = $row["post_id"];
                $row_data["title"] = $row["title"];
                $row_data["author"] = $row["author"];
                $row_data["intro"] = $row["intro"];
                $row_data["time"] = $row["post_time"];
                $row_data["view_count"] = $row["view_count"];
                $row_data["votes_count"] = $row["votes_count"];
                $row_data["tags"] = explode(" ", $row["tags"]);
                array_push($ret["data"]["popular"], $row_data);
            }
        }
        else {
            $err = "Blogs not found";
            $flag = false;
        }
        
        
        $query = "SELECT * FROM posts ORDER BY id DESC";
        $sql = $conn->prepare($query);
        $sql->execute();
        $res = $sql->get_result();

        $file = "";

        if($res->num_rows > 0){
            while($row = $res->fetch_assoc()){
            $row_data = array();
                $file = $row["src_file"];
                $row_data["id"] = $row["post_id"];
                $row_data["title"] = $row["title"];
                $row_data["author"] = $row["author"];
                $row_data["intro"] = $row["intro"];
                $row_data["time"] = $row["post_time"];
                $row_data["view_count"] = $row["view_count"];
                $row_data["votes_count"] = $row["votes_count"];
                $row_data["tags"] = explode(" ", $row["tags"]);
                array_push($ret["data"]["trending"], $row_data);
            }
        }
        else {
            $err = "Blogs not found";
            $flag = false;
        }

        $sql->close();
    }
        

    $ret["status"] = $flag;
    if(!$flag){
        $ret["error"] = $err;
    }

    echo json_encode($ret);
?>

